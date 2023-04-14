import styles from './7conway.module.css'
import utilities from '/styles/utilities.module.css'
import { useState, useEffect } from 'react';


let arr = []

let numColums = 20
let numRows = 20

for (let i = 0; i < numColums; i++) {
    arr.push([])
    for (let j = 0; j < numRows; j++) {
        const rand = Math.random() < 0.2 ? 1 : 0;
        arr[i].push(rand)
    }
}

const Conway = () => {

    const [currentBoxes, setCurrentBoxes] = useState([]);
    const [previousBoxes, setPreviousBoxes] = useState(arr);
    const [tick, setTick] = useState(0);

    const updateArray = (outer_array) => {
        const new_array = outer_array.map((inner_array, i) =>
            inner_array.map((value, j) =>
                <div
                    className={value === 1 ? styles.grid_box_active : styles.grid_box_inactive}
                    key={`box_${i}_${j}`}
                ></div>
            )
        );
        return new_array;
    };

    const checkArray = (prev_array, curr_array) => {
        curr_array = prev_array
        for (let i = 0; i < numColums; i++) {
            for (let j = 0; j < numRows; j++) {

                let n = 0
                for (let x = i - 1; x < i + 2; x++) {
                    for (let y = j - 1; y < j + 2; y++) {
                        if ((x >= 0 && y >= 0 && x <= numColums - 1 && y <= numRows - 1) && prev_array[x][y] == 1) {
                            n++
                        }
                    }
                }

                if (prev_array[i][j] === 1) {
                    n--
                    if (n < 2 || n > 3) {
                        curr_array[i][j] = 0
                    }
                } else {
                    if (n === 3) {
                        curr_array[i][j] = 1
                    }
                }
            }
        }
        return curr_array
    }

    useEffect(() => {

        const timeOut = setTimeout(() => {
            setCurrentBoxes(updateArray(previousBoxes));
            const updater_array = checkArray(previousBoxes, currentBoxes)
            setPreviousBoxes(updater_array)
            setTick((prevTick) => prevTick + 1);
        }, 1000);

        return () => {
            clearTimeout(timeOut)
        };
    }, [previousBoxes, tick]);

    return (
        <div className={styles.grid_cont}>
            <div className={`${styles.grid} ${tick === 1 ? styles.initial_animation : styles.opacity}`}>
                {currentBoxes}
            </div>
        </div>
    )
}

export default Conway