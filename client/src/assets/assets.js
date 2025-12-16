import avatar_icon from './avatar_icon.png'
import gallery_icon from './gallery_icon.svg'
import help_icon from './help_icon.png'
import logo_icon from './logo_icon.png'
import logo_big from './logo_big.png'
import logo from './logo.png'
import profile_Person01 from './profile_Person01.png'
import profile_Person02 from './profile_Person02.png'
import profile_Person03 from './profile_Person03.png'
import profile_Person04 from './profile_Person04.png'
import profile_Person05 from './profile_Person05.png'
import search_icon from './search_icon.png'
import send_button from './send_button.svg'
import menu_icon from './menu_icon.png'
import arrow_icon from './arrow_icon.png'
import code from './code.svg'
import bgImage from './bgImage.svg'
import pic1 from './pic1.png'
import pic2 from './pic2.png'
import pic3 from './pic3.png'
import pic4 from './pic4.png'
import img1 from './img1.jpg'
import img2 from './img2.jpg'

const assets = {
    avatar_icon,
    gallery_icon,
    help_icon,
    logo_big,
    logo_icon,
    logo,
    search_icon,
    send_button,
    menu_icon,
    arrow_icon,
    code,
    bgImage,
    profile_Person01,
    
    // profile_Person02,
    // profile_Person03,
    // profile_Person04,
    // profile_Person05,
}

export default assets;

export const imagesDummyData = [pic1, pic2, pic3, pic4, pic1, pic2]

export const userDummyData = [
    {
        "_id": "680f50aaf10f3cd28382ecf2",
        "email": "test@rapidinfo.dev",
        "fullName": "Person01",
        "profilePic": profile_Person01,
        "bio": "Hi Everyone, I am Using RapidInfo",
    },
    {
        "_id": "680f50e4f10f3cd28382ecf9",
        "email": "test2@rapidinfo.dev",
        "fullName": "Person02",
        "profilePic": profile_Person02,
        "bio": "Hi Everyone, I am Using RapidInfo",
    },
    {
        "_id": "680f510af10f3cd28382ed01",
        "email": "test3@rapidinfo.dev",
        "fullName": "Person03",
        "profilePic": profile_Person03,
        "bio": "Hi Everyone, I am Using RapidInfo",
    },
    {
        "_id": "680f5137f10f3cd28382ed10",
        "email": "test4@rapidinfo.dev",
        "fullName": "Person04",
        "profilePic": profile_Person04,
        "bio": "Hi Everyone, I am Using RapidInfo",
    },
    {
        "_id": "680f516cf10f3cd28382ed11",
        "email": "test5@rapidinfo.dev",
        "fullName": "Person05",
        "profilePic": profile_Person05,
        "bio": "Hi Everyone, I am Using RapidInfo",
    }
]

export const messagesDummyData = [
    {
        "_id": "680f571ff10f3cd28382f094",
        "senderId": "680f5116f10f3cd28382ed02",
        "receiverId": "680f50e4f10f3cd28382ecf9",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-04-28T10:23:27.844Z",
    },
    {
        "_id": "680f5726f10f3cd28382f0b1",
        "senderId": "680f50e4f10f3cd28382ecf9",
        "receiverId": "680f5116f10f3cd28382ed02",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-04-28T10:23:34.520Z",
    },
    {
        "_id": "680f5729f10f3cd28382f0b6",
        "senderId": "680f5116f10f3cd28382ed02",
        "receiverId": "680f50e4f10f3cd28382ecf9",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-04-28T10:23:37.301Z",
    },
    {
        "_id": "680f572cf10f3cd28382f0bb",
        "senderId": "680f50e4f10f3cd28382ecf9",
        "receiverId": "680f5116f10f3cd28382ed02",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-04-28T10:23:40.334Z",
    },
    {
        "_id": "680f573cf10f3cd28382f0c0",
        "senderId": "680f50e4f10f3cd28382ecf9",
        "receiverId": "680f5116f10f3cd28382ed02",
        "image": img1,
        "seen": true,
        "createdAt": "2025-04-28T10:23:56.265Z",
    },
    {
        "_id": "680f5745f10f3cd28382f0c5",
        "senderId": "680f5116f10f3cd28382ed02",
        "receiverId": "680f50e4f10f3cd28382ecf9",
        "image": img2,
        "seen": true,
        "createdAt": "2025-04-28T10:24:05.164Z",
    },
    {
        "_id": "680f5748f10f3cd28382f0ca",
        "senderId": "680f5116f10f3cd28382ed02",
        "receiverId": "680f50e4f10f3cd28382ecf9",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-04-28T10:24:08.523Z",
    }
]
