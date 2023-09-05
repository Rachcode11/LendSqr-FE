import UserFriend from '../../asset/user-friends 1.svg';
import User from '../../asset/users 1.svg';
import Loan from '../../asset/loan.svg'
import HandShake from '../../asset/handshake-regular 1.svg'
import Piggy from '../../asset/piggy-bank 1.svg'
import Request from '../../asset/Group 104.svg'
import UserCheck from '../../asset/user-check 1.svg'
import UserTimes from '../../asset/user-times 1.svg'
import bank from '../../asset/np_bank_148501_000000 1.svg'
import Logos from '../../asset/logossss.svg'
import Icon from '../../asset/icon.svg'
import Galaxy from '../../asset/galaxy 1.svg'
import UserCog from '../../asset/user-cog 1.svg'
import Scroll from '../../asset/scroll 1.svg'
import ChartBar from '../../asset/chart-bar 2.svg'
import Slider from '../../asset/sliders-h 1.svg'
import Audit from '../../asset/Audit.svg'
import badge from '../../asset/badge-percent 1.svg'
import dropdown from '../../asset/dropdown.svg';
import briefcase from '../../asset/briefcase 1.svg';
import {it} from "node:test";

 
 export const SidebarData = [{
    "id" : 1,
    "name" : "Switch Organization",
    "image": dropdown,
    subItem : [
        {

            "id" : 2,
            "name": "CUSTOMER",
            subItems : [
                {
                    "id": 1,
                    "image":UserFriend,
                    "name": "User"
                },
                {
                    "id": 2,
                    "image": User,
                    "name": "Guarantor"
                },
                {
                    "id": 3,
                    "image": Loan,
                    "name": "Loan"
                },
                {
                    "id": 4,
                    "image":HandShake,
                    "name": "Decision Models"
                },
                {
                    "id": 5,
                    "image": Piggy,
                    "name": "Savings"
                },
                {
                    "id": 6,
                    "image": Request,
                    "name": "Loan Requests"
                },
                {
                    "id": 7,
                    "image": UserCheck,
                    "name": "WhiteList",
                },
                {
                    "id": 8,
                    "image":UserTimes,
                    "name": "Karma"
                }
            ]

        },
        {
            "id": 3,
            "name": "BUSINESSES",
            subItems:[
                {
                    "id": 1,
                    "image": briefcase,
                    "name": "Organization"
                },
                {
                    "id": 2,
                    "image": Loan,
                    "name": "Loan Products"
                },
                {
                    "id": 3,
                    "image": bank,
                    "name": "Savings Products"
                },
                {
                    "id": 4,
                    "image":Logos,
                    "name": "Fees and Charges"
                },
                {
                    "id": 5,
                    "image": Icon,
                    "name": "Transaction"
                },
                {
                    "id": 6,
                    "image":Galaxy,
                    "name":"Services"
                },
                {
                    "id": 7,
                    "image": UserCog,
                    "name": "Services Account"
                },
                {
                    "id": 8,
                    "image": Scroll,
                    "name": "Settlements"
                },
                {
                    "id": 9,
                    "image": ChartBar,
                    "name": "Reports"
                }
            ]

        },
        {
            "id": 4,
            "name": "SETTINGS",
            subItems: [
                {
                    "id": 1,
                    "image": Slider,
                    "name": "Preferences"
                },
                {
                    "id": 2,
                    "image": badge,
                    "name": "Fees and Pricing"
                },
                {
                    "id": 3,
                    "image": Audit,
                    "name": "Audit Logs"
                }
            ]
        }
    ]


}]