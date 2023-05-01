/* eslint-disable @next/next/no-img-element */
"use client"
import { Typography } from "@material-tailwind/react";

export default function Example() {
    return (
        <footer className="w-full bg-white p-8">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">

            </div>
            <hr className="my-8 border-blue-gray-50" />
            <Typography color="blue-gray" className="text-center font-normal">
                &copy; 2023 WPR-25
            </Typography>
        </footer>
    );
}