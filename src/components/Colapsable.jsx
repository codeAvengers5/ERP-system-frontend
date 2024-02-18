import { useState } from 'react';
const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li  className='border-b-4 mb-[40px] list-8 custom-list-item border-[#A3B9FF]' >
      <div
       className={`flex items-center cursor-pointer whitespace-nowrap font-bold ${
        isOpen ? 'text-[#001659]' : 'text-[#354370]'
      }`}
        onClick={toggleFAQ}
      >
        <div className="flex items-center pr-[18px] mt-[0px]">
        <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="5" cy="5.5" r="5" fill="black" />
        </svg>
       
      </div>
        {question }
       <div className="mr-2  flex justify-between items-center h-[10px]">
          {isOpen ? (
            <button
              className="bg-transparent border-none text-[#2B53CF] outline-none ml-[1350px]"
              onClick={toggleFAQ}
            >
              <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.7571 12.7296H6.07681V10.792H20.7571V12.7296Z" fill="#2B53CF"/>
</svg>
            </button>
          ) : (
            <button
              className="bg-transparent border-none text-[#2B53CF] outline-none ml-[1350px]"
              onClick={toggleFAQ}
            >
              <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 2.25C5 1.85218 5.15804 1.47064 5.43934 1.18934C5.72064 0.908035 6.10218 0.75 6.5 0.75H8C8.39782 0.75 8.77936 0.908035 9.06066 1.18934C9.34196 1.47064 9.5 1.85218 9.5 2.25V5.25H12.5C12.8978 5.25 13.2794 5.40804 13.5607 5.68934C13.842 5.97064 14 6.35218 14 6.75V8.25C14 8.64782 13.842 9.02936 13.5607 9.31066C13.2794 9.59196 12.8978 9.75 12.5 9.75H9.5V12.75C9.5 13.1478 9.34196 13.5294 9.06066 13.8107C8.77936 14.092 8.39782 14.25 8 14.25H6.5C6.10218 14.25 5.72064 14.092 5.43934 13.8107C5.15804 13.5294 5 13.1478 5 12.75V9.75H2C1.60218 9.75 1.22064 9.59196 0.93934 9.31066C0.658035 9.02936 0.5 8.64782 0.5 8.25V6.75C0.5 6.35218 0.658035 5.97064 0.93934 5.68934C1.22064 5.40804 1.60218 5.25 2 5.25H5V2.25Z" fill="#2B53CF"/>
</svg> 
            </button>
          )}
        </div>
        
      </div>
      {isOpen && <div className="pl-0 pr-[10px] mt-[12px] mr-[118px]">{answer}</div>}
      
    </li>
  );
};
export default FAQ;