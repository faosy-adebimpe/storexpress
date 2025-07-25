'use client';

const Account = () => {
    return (
        <form
            className="mt-5 flex gap-5 flex-col"
            onSubmit={(event) => event.preventDefault()}
        >
            <input
                type="text"
                placeholder="Email*"
                className="w-full text-gray-500 border-2 border-gray-500 p-3 rounded-lg outline-none"
            />

            <p>
                By continuing, I agree to StoreXpress&apos;s{' '}
                <span className="font-semibold underline">Privacy Policy</span>{' '}
                <span className="font-semibold underline">Terms of Use.</span>
            </p>
            <button className="px-9 py-3 rounded-full text-white bg-black font-semibold self-end btn">
                Continue
            </button>
        </form>
    );
};

export default Account;
