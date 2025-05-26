import Link from 'next/link';
import React from 'react';

const AuthLinks = () => {
    //temporary
    const status = "noauthenticated"
    return (
        <>
        {status === "noauthenticated" ? (
            <Link href="/login">Login</Link>
        ):( <>
            <Link href={"/write"}>Write</Link>
            <span>Logout</span>
        </> )}
        </>
    );
};

export default AuthLinks;