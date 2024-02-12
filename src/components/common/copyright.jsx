import React from "react";
import Link from "next/link";
import Image from "next/image";
import websiteLogo from '../../assets/images/logo.png'
const CopyRight = () => {
    const currentYear = new Date().getFullYear();
    const websiteName = 'The Fusion Journey'
    return (
        <>
            <div className="fj-inline copyright-div">
                <div className="f-left-col">
                    <p className="fj-text-sm">
                        © {currentYear} <Link href='#' className="fj-a-link">{websiteName}</Link>. All rights reserved.
                    </p>
                    <Link href='#' className="fj-text-sm fj-a-link mr-5">Terms & Conditions</Link>
                    <Link href='#' className="fj-text-sm fj-a-link">Legal Notice</Link>
                </div>

                <div>
                    <Link href='#' className="fj-a-link">
                        <Image src={websiteLogo} alt='logo' />
                    </Link>

                </div>

            </div>
        </>
    );
};

export default CopyRight;