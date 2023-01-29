// SPDX-License-Identifier:MIT

pragma solidity ^0.8.4;

contract removelement
{
   uint[] data = [10, 20, 30, 40, 50, 60 ]; 
    function removebyindex(uint x) public returns(uint[]  memory)
    {
        if(x>=data.length)
        return data;

         for(uint i=x;i<data.length-1;i++)
         {
             data[i]=data[i+1];

         }
         data.pop();
         return data;
    } 
}
