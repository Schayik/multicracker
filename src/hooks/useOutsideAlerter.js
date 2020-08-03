import { useEffect } from "react";

const useOutsideAlerter = (ref, handleClickOutside) => {

    const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            handleClickOutside(event)
        }
    }

    useEffect(() => {
        // Bind the event listener
        document.addEventListener("mousedown", handleClick);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClick);
        };
    });
}

export default useOutsideAlerter