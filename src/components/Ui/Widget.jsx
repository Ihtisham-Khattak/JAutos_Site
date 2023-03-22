import React from 'react'
import WhatsAppWidget from "react-whatsapp-chat-widget";
import Icon from "../../assets/images/apple-touch-icon.png"

const Widget = () => {
  return (
    <WhatsAppWidget
    phoneNo="+923319038578"
    position="right"
    widgetWidth="300px"
    widgetWidthMobile="260px"
    autoOpen={true}
    autoOpenTimer={5000}
    messageBox={true}
    messageBoxTxt="Hi there, how may i help you?"
    iconSize="40"
    iconColor="white"
    iconBgColor="green"
    headerIcon={Icon}
    headerIconColor="pink"
    headerTxtColor="black"
    headerBgColor="green"
    headerTitle="J-Autos"
    headerCaption="Online"
    bodyBgColor="#bbb"
    chatPersonName="Support"
    chatMessage={<>Hi there 👋 <br /><br /> How can I help you?</>}
    footerBgColor="#999"
    placeholder="Type a message.."
    btnBgColor="yellow"
    btnTxt="Start Chat"
    btnTxtColor="black"
/>
  )
}

export default Widget