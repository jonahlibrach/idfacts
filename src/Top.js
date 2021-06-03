import logo from './logo.svg';
import './App.css';
import data from './data.js';
import React from 'react';
export default function Top({setSelection}) {

  const random = () => Number(Math.round(Math.random()*1e5+1))
  let tweets = Array(data.length).fill(0).map(random).sort((a,b) => b-a);
  
  return (
    <div style={{display:'flex',flexDirection:'column',
      position:'relative',margin:0,padding:0,
      width:'100%',
      }}>
      <div style={{
        top:0,
        width:'100%',
        height:60,
        textAlign:'center', 
        //background:'#fcfcfc',
        //borderBottom:'1px solid #eee',
        }}>
        <h3>Top</h3>
      </div>
      <div style={{overflowY:'scroll', flex:1}}>
        <table style={{
          borderSpacing:0,borderCollapse:'collapse',width:'100%'}}>
          <tr>
            <td style={{padding:10,borderBottom:'1px solid #eee'}}><b>Accusations</b></td>
            <td style={{padding:10,borderBottom:'1px solid #eee'}}><b>Upvotes</b></td>
          </tr>
          {data.map( (accusation, iiAccusation) => {
            return (
              <tr onClick={() => setSelection(accusation)}
                style={{margin:0,padding:0}}>
                <td style={{fontSize:16,margin:0,padding:10,background:'white',borderBottom:'1px solid #eee'}}>{accusation}</td>
                <td style={{paddingLeft:30,paddingRight:10,background:'white',borderBottom:'1px solid #eee',color:'#aaa'}}>{
                  tweets[iiAccusation]
                }</td>
              </tr>
            )
          })}
        </table>
      </div>
    </div>
  );
}

