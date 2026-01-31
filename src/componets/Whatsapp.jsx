import React, { useMemo } from 'react';

const WhatsAppButton = ({ phoneNumber, isActive = true }) => {

  // Generate the WhatsApp link
  const whatsappLink = useMemo(() => {
    if (!isActive || !phoneNumber) return '#'; // Disable if not active or no number

    const message = `Sender name I will be your valentine 🤭❤️\n\nStart Arrangings\n`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  }, [phoneNumber, isActive]);

  // Prevent clicking if not active
  const handleClick = (e) => {
    if (!isActive || !phoneNumber) e.preventDefault();
  };

  return (
    <a 
      href={whatsappLink}
      onClick={handleClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        padding: '18px 30px',
        borderRadius: '12px',
        fontSize: '20px',
        fontWeight: '700',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        cursor: isActive ? 'pointer' : 'not-allowed',
        background: isActive 
          ? 'linear-gradient(135deg, #136154, #4c746f)' 
          : 'gray',
        color: 'white',
        opacity: isActive ? 1 : 0.7,
        boxShadow: isActive ? '0 6px 15px rgba(37, 211, 102, 0.25)' : 'none'
      }}
    >
      <span>💬</span>
      <span>
        {isActive ? 'Send to your valentine' : 'Not Sending'}
      </span>
    </a>
  );
};

export default WhatsAppButton;






















// import React, { useMemo } from 'react';

// const WhatsAppButton = ({phoneNumber}) => {

  
//   const whatsappLink = useMemo(() => {
   
//     if (!notSending) {
//       return '#';
//     }

//     // const phoneNumber = 

//     // 3. Build the Message String
//     let message = `Sender name I will be your valentine 🤭❤️\n\n`;
//     message += `Start Arrangings\n`;

//     // 4. Construct the URL
//     return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
//   }, [phoneNumber]); // Dependencies

//   // 5. Handling Click Logic

//   return (
//     <a 
//       href={whatsappLink}
//       onClick={handleClick}
//       style={{
//         display: 'inline-flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         gap: '10px',
//         padding: '18px 30px',
//         borderRadius: '12px',
//         fontSize: '20px',
//         fontWeight: '700',
//         textDecoration: 'none',
//         transition: 'all 0.3s ease',
//         cursor: isActive ? 'pointer' : 'not-allowed',
//         // Dynamic styling based on state
//         background: isActive 
//           ? 'linear-gradient(135deg, #136154, #4c746f)' 
//           : 'gray',
//         color: 'white',
//         opacity: isActive ? 1 : 0.7,
//         boxShadow: isActive ? '0 6px 15px rgba(37, 211, 102, 0.25)' : 'none'
//       }}
//     >
//       <span>💬</span>
//       <span>
//         {isActive 
//           ? `Send to your valentine` 
//           : 'Not Sending'
//         }
//       </span>
//     </a>
//   );
// };

// export default WhatsAppButton;