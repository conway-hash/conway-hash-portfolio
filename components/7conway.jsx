import styles from './7conway.module.css'
import utilities from '/styles/utilities.module.css'
import { useState, useEffect } from 'react';

export default function Conway() {

    let numColums = 20
    let numRows = 20
    let size = 50

    const [arrayCurrent, setArrayCurrent] = useState([])
    const [arrayPrevious, setArrayPrevious] = useState([])



    return (
        <div className={styles.grid_cont} style={{ gridTemplateColumns: `repeat(${numColums},${size}px)`, gridTemplateRows: `repeat(${numRows},${size}px)` }}>

        </div>
    )
}
