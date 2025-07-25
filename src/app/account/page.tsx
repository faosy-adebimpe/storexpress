import Account from './Account';

const AccountPage = () => {
    return (
        <div className="px-[5%] flex gap-3 flex-col items-start max-w-xl mx-auto">
            <h2 className="text-3xl font-normal">
                Enter your email to join us or sign in.
            </h2>
            <p className="">Nigeria</p>
            <Account />
        </div>
    );
};

export default AccountPage;
