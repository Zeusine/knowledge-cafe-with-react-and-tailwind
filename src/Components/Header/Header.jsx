
import profile from "../../images/profile.png"

const Header = () => {
    return (
        <header className='flex justify-between m-3 p-5 border-b-1 border-gray-300'>
            <h1 className='text-4xl font-black
            '>Knowledge Cafe</h1>
            <img src={profile} alt="" />
            
        </header>
        
    );
};

export default Header;