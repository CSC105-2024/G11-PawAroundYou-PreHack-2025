import React from "react";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-[#FFECE2] text-[#5E7CA3] font-['Poppins']">

            <main className="px-6 py-16 max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 leading-snug">
                    Start your journey of support<br className="hidden md:block" /> and care
                </h1>
                <img
                    src="./public/Teamwork.png"
                    alt="Teamwork"
                    className="rounded-xl w-full mb-5 shadow"
                />

                <div className="text-center">
                    <button className="bg-[#89ACCE] text-white mb-15 px-6 py-3
                    rounded-sm font-medium shadow-md hover:bg-[#6e95bb]">
                        Join the Community
                    </button>
                </div>
                <div className="flex flex-col md:flex-row gap-10 items-center mb-20">
                    <img
                        src="./public/Hands together.png"
                        alt="Hands together"
                        className="rounded-xl w-full md:w-1/2 shadow"
                    />
                    <p className="text-lg md:w-1/2 leading-relaxed">
                        We believe no one should face challenges alone.
                        Our community is built on support, where people come together to offer help,
                        share advice, and solve real-life problems — together.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center mb-10 max-w-5xl mx-auto text-rg leading-relaxed">
                    <img
                        src="./public/Teammeet.png"
                        alt="Teammeet"
                        className="rounded-xl w-full md:w-1/2 shadow mb-4 md:mb-0 md:mr-6"
                    />
                    <p className="text-lg md:w-1/2">
                        Here, people come together to ask for help, offer support, and share kindness.
                        <br />
                        Whether you need a hand or want to lend one — this space is for you.
                    </p>
                </div>


            </main>
        </div>
    );
}