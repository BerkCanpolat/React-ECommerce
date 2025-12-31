import { useEffect, useState } from "react"
import { MdKeyboardDoubleArrowUp } from "react-icons/md";


const BackToTop = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const toggleVisibility = () => {
        if(window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, [])

  return (
    <div className="fixed bottom-10 right-10 z-50">
        {
            isVisible && (
                <button onClick={scrollToTop} className="bg-black text-white text-6xl rounded-full p-1 cursor-pointer hover:bg-gray-600">
                    <MdKeyboardDoubleArrowUp />
                </button>
            )
        }
    </div>
  )
}

export default BackToTop