
import React from 'react'

export const MenuItem = (props) => {

  return (
    <li>{props.children}</li>
  )

}

export const Menu = (props) => {

  const menuItemsAuthenticated = ["My Services","My Account","Update Info"].map((name,index) => {
    return <MenuItem key={index}>{name}</MenuItem>
  })
  
  const menuItemsNonAuthenticated = ["Register"].map((name,index) => {
    return <MenuItem key={index}>{name}</MenuItem>
  })

  const menuItems = <ul>
    <MenuItem>Home</MenuItem>
    {props.isAuthenticated ? menuItemsAuthenticated : menuItemsNonAuthenticated}
  </ul>

  return (
      menuItems
  )
}
