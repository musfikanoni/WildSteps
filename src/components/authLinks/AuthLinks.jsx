"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './authLinks.module.css'

const AuthLinks = () => {
    const [open, setOpen] = useState(false);
    //temporary
    const status = "noauthenticated"
    return (
        <>
            {status === "noauthenticated" ? (
                <Link href="/login">Login</Link>
            ):( <>
                    <Link href={"/write"}>Write</Link>
                    <span>Logout</span>
                </> 
            )}
            <div className={styles.burger } onClick={() => setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            {open && (
                <div className={styles.responsiveMenu}>
                    <Link href="/">Home</Link>
                    <Link href="/">Contact</Link>
                    {status === "noauthenticated" ? (
                        <Link href="/login">Login</Link>
                    ):( <>
                            <Link href={"/write"}>Write</Link>
                            <span>Logout</span>
                        </> 
                    )}
                </div>
            )} 
        </>
    );
};

export default AuthLinks;