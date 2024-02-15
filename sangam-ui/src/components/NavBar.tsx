import React from 'react';





const MenuItems = ({ menuName }) => {
     
    return (
        <li>
            {{menuName} + 'item'} 
        </li>
    )
}

const Menu = ({ item }) => {

     return (
        <ul><a>{item.menuName}</a>
            {item.subMenu ? item.subMenu.map((menu) =>(<MenuItems menuName={menu}></MenuItems>)): <a>{item.menuName}</a>}
        </ul>
     )
}

export const NavBar = () => {
    const apiData = [
        {
         menuName: 'Menu1',
         subMenus: [
             {
                 menuName: "s1"
             },
             {
                 menuName: "s2"
             },
             {
                 menuName: "s3"
             },
             {
                 menuName: "s4"
             }
         ]
        },
        {
         menuName: 'Menu2',
         subMenus: [
             {
                 menuName: "s1"
             },
             {
                 menuName: "s2"
             },
             {
                 menuName: "s3"
             },
             {
                 menuName: "s4"
             }
         ]
        },
        {
         menuName: 'Menu3',
         subMenus: [
             {
                 menuName: "s1"
             },
             {
                 menuName: "s2"
             },
             {
                 menuName: "s3"
             },
             {
                 menuName: "s4"
             }
         ]
        }
     
     ]
     return (
        <nav>
        {apiData.map(data => {
            return (
                <Menu item = {data}></Menu> 
            )
        })}
        </nav>
     )
}