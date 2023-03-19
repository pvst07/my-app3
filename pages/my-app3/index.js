import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Button } from 'primereact/button';


const inter = Inter({ subsets: ['latin'] })

export default function BasicDemo() {
    return (

    <div>
        <Button label="Submit" />
        <br></br>
        <Button label="Submit" />


    </div>
    )
}