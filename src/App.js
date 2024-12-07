import React, {useState, useEffect} from 'react';
import { AdmobAds, BannerPosition, BannerSize } from "capacitor-admob-ads";
import './App.css';
import resetRed from './data/img/reset1.png';
import resetBlack from './data/img/reset-black.png';
import { dealerData, hardData, softData, pairData, playData } from './data/data';
import backgroundImg from './data/img/bg.png';
import { Plugins } from '@capacitor/core';
const { AdMob } = Plugins;

const App = () => {
  const [blackInitial, setBlackInitial] = useState(false);
  const [dealerChecked, setDealerChecked] = useState(false);
  const [playerCheckedData, setPlayerCheckedData] = useState([]);
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  
  const generateClass = (content, index1, index2) => {
    if(blackInitial){
      return "tableTd blackColor blackBack";
    }
    if(content === 'HIT'){
      if(playerCheckedData.length === 0){
        if( dealerChecked === index2){
          return "tableTd whiteColor greenBack";
        }
        else if(dealerChecked === false){
          return "tableTd greyColor greenBack";
        }
        else{
          return "tableTd blackColor blackBack";
        }
      }
      else if(playerCheckedData.includes(index1)){
        if( dealerChecked === index2){  
          return "tableTd whiteColor greenBack";
        }
        else if(dealerChecked === false){
          return "tableTd whiteColor transBack";
        }
        else{
          return "tableTd blackColor blackBack";
        }
      }
      else{
        if( dealerChecked === index2){
          return "tableTd blackColor blackBack";
        }
        else if(dealerChecked === false){
          return "tableTd blackColor blackBack";
        }
        else{
          return "tableTd blackColor blackBack";
        }
      }
    }
    else if (content === 'STAND'){
      if(playerCheckedData.length === 0){
        if( dealerChecked === index2){
          return "tableTd whiteColor redBack";
        }
        else if(dealerChecked === false){
          return "tableTd greyColor redBack";
        }
        else{
          return "tableTd blackColor blackBack";
        }
      }
      else if(playerCheckedData.includes(index1)){
        if( dealerChecked === index2){  
          return "tableTd whiteColor redBack";
        }
        else if(dealerChecked === false){
          return "tableTd whiteColor transBack";
        }
        else{
          return "tableTd blackColor blackBack";
        }
      }
      else{
        if( dealerChecked === index2){
          return "tableTd blackColor blackBack";
        }
        else if(dealerChecked === false){
          return "tableTd blackColor blackBack";
        }
        else{
          return "tableTd blackColor blackBack";
        }
      }
    }
    else if (content === 'Double or Hit'){
      if(playerCheckedData.length === 0){
        if( dealerChecked === index2){
          return "tableTd whiteColor blueBack";
        }
        else if(dealerChecked === false){
          return "tableTd greyColor blueBack";
        }
        else{
          return "tableTd blackColor blackBack";
        }
      }
      else if(playerCheckedData.includes(index1)){
        if( dealerChecked === index2){  
          return "tableTd whiteColor blueBack";
        }
        else if(dealerChecked === false){
          return "tableTd whiteColor transBack";
        }
        else{
          return "tableTd blackColor blackBack";
        }
      }
      else{
        if( dealerChecked === index2){
          return "tableTd blackColor blackBack";
        }
        else if(dealerChecked === false){
          return "tableTd blackColor blackBack";
        }
        else{
          return "tableTd blackColor blackBack";
        }
      }
    }
    else if (content === 'Double or Stand'){
      if(playerCheckedData.length === 0){
        if( dealerChecked === index2){
          return "tableTd whiteColor pinkBack";
        }
        else if(dealerChecked === false){
          return "tableTd greyColor pinkBack";
        }
        else{
          return "tableTd blackColor blackBack";
        }
      }
      else if(playerCheckedData.includes(index1)){
        if( dealerChecked === index2){  
          return "tableTd whiteColor pinkBack";
        }
        else if(dealerChecked === false){
          return "tableTd whiteColor transBack";
        }
        else{
          return "tableTd blackColor blackBack";
        }
      }
      else{
        if( dealerChecked === index2){
          return "tableTd blackColor blackBack";
        }
        else if(dealerChecked === false){
          return "tableTd blackColor blackBack";
        }
        else{
          return "tableTd blackColor blackBack";
        }
      }
    }
    else if (content === 'SPLIT'){
      if(playerCheckedData.length === 0){
        if( dealerChecked === index2){
          return "tableTd whiteColor dodgerBack";
        }
        else if(dealerChecked === false){
          return "tableTd greyColor dodgerBack";
        }
        else{
          return "tableTd blackColor blackBack";
        }
      }
      else if(playerCheckedData.includes(index1)){
        if( dealerChecked === index2){  
          return "tableTd whiteColor dodgerBack";
        }
        else if(dealerChecked === false){
          return "tableTd whiteColor transBack";
        }
        else{
          return "tableTd blackColor blackBack";
        }
      }
      else{
        if( dealerChecked === index2){
          return "tableTd blackColor blackBack";
        }
        else if(dealerChecked === false){
          return "tableTd blackColor blackBack";
        }
        else{
          return "tableTd blackColor blackBack";
        }
      }
    }
  }

  const blackInitialize = () => {
    setBlackInitial(true);
  }

  useEffect(() => {
    const initializeAdMob = async () => {
        try {
            await AdMob.initialize("us.technogurus.blackjackstats");
            
            // Show a banner ad
            // ca-app-pub-1554812834222157~3680825405
            await AdMob.showBanner({
              adId: "ca-app-pub-1554812834222157/5434832145",
              position: "bottom", // "top" or "bottom"
              size: "BANNER", // Common sizes: "BANNER", "LARGE_BANNER", etc.
          });
        } catch (error) {
            console.error('Error initializing AdMob', error);
        }
    };

    initializeAdMob();

    return () => {
        // Optional: Cleanup when the component unmounts
        // AdMob.hideBanner();
    };
}, []);

  return (
    <div className="App">
      <div className='tableHead dealerHead1'>
        <div className='flex-row'>
          {
            dealerData.map((item, index) => {
              return (
                <div className='dealerIcon tableTh' onClick={() => {
                  setBlackInitial(false);
                  setDealerChecked(index);
                }} key={index}><img src={item.content} /></div>
              );
            })
          }
        </div>
      </div>
      <div className='tableHead dealerHead2'>
        <div className='flex-row'>
          {
            dealerData.map((item, index) => {
              return (
                <div className='dealerIcon tableTh' onClick={() => {
                  
                  setBlackInitial(false);
                  setDealerChecked(index);
                }} key={index}><img src={item.content} /></div>
              );
            })
          }
        </div>
      </div>
      <div className='tableBody dealerBody1'>
        {
          hardData.map((row, index1) => {
            return (
              <div key={index1} className='flex-side tableRow'>
                <div className='tableHardFirst' onClick={() => {
                  setBlackInitial(false);
                  if(playerCheckedData.length === 0){
                    setPlayerCheckedData((prevItems) => [...prevItems, index1]);
                  }
                  else if(playerCheckedData.length === 1){
                    if(checkbox1){
                      setPlayerCheckedData((prevItems) => [...prevItems, index1]);
                    }
                  }
                  else if(playerCheckedData.length === 2){
                    if(checkbox2){
                      setPlayerCheckedData((prevItems) => [...prevItems, index1]);
                    }
                  }
                }}><img src={row.name} alt='hard' /></div>
                {
                  row.rowdata.map((item, index2) => {
                    return (
                      <div className={generateClass(item, index1, index2)} key={index2}>{item}</div>
                    );
                  })
                }
              </div>
            );
          })
        }
      </div>
      <div className='tableBody dealerBody2'>
        {
          pairData.map((row, index1) => {
            return (
              <div key={index1} className='flex-side tableRow'>
                <div className='tablePairFirst' onClick={() => {
                  setBlackInitial(false);
                  if(playerCheckedData.length === 0){
                    setPlayerCheckedData((prevItems) => [...prevItems, 19 + index1]);
                  }
                  else if(playerCheckedData.length === 1){
                    if(checkbox1){
                      setPlayerCheckedData((prevItems) => [...prevItems, 19 + index1]);
                    }
                  }
                  else if(playerCheckedData.length === 2){
                    if(checkbox2){
                      setPlayerCheckedData((prevItems) => [...prevItems, 19 + index1]);
                    }
                  }
                }}><img src={row.name} alt='pair' /></div>
                {
                  row.rowData.map((item, index2) => {
                    return (
                      <div className={generateClass(item, 19 + index1, index2)} key={index2}>{item}</div>
                    );
                  })
                }
              </div>
            );
          })
        }
      </div>
      <div className='tableBody softBody1'>
        {
          softData.map((row, index1) => {
            return (
              <div key={index1} className='flex-side tableRow'>
                <div className='tableSoftFirst' onClick={() => {
                  setBlackInitial(false);
                  if(playerCheckedData.length === 0){
                    setPlayerCheckedData((prevItems) => [...prevItems, 11 + index1]);
                  }
                  else if(playerCheckedData.length === 1){
                    if(checkbox1){
                      setPlayerCheckedData((prevItems) => [...prevItems, 11 + index1]);
                    }
                  }
                  else if(playerCheckedData.length === 2){
                    if(checkbox2){
                      setPlayerCheckedData((prevItems) => [...prevItems, 11 + index1]);
                    }
                  }
                }}><img src={row.name} alt='soft' /></div>
                {
                  row.rowdata.map((item, index2) => {
                    return (
                      <div className={generateClass(item, 11 + index1, index2)} key={index2}>{item}</div>
                    );
                  })
                }
              </div>
            );
          })
        }
      </div>
      <div className='btnGroup'>
        <div className='reset' onClick={() => {
          
          setBlackInitial(false);
          setPlayerCheckedData([]);
          setDealerChecked(false);
          console.log(playerCheckedData);
        }}>
          <img src={resetRed} alt='reset'/>
        </div>
        <div className='resetBlack' onClick={() => {
          setPlayerCheckedData([]);
          setDealerChecked(false);
          blackInitialize();
        }}>
          <img src={resetBlack} alt='reset'/>
        </div>
      </div>
      <div className='result'>
        <h3>Dealer <span>Chance of Busting</span></h3>
        <div className='flex-side dealerResult'>
          <div className='col-md-6'>
            <select value={dealerChecked} onChange={(e) => {
              setDealerChecked(parseInt(e.target.value));
            }}>
              <option value={false} hidden></option>
              {dealerData.map((item, index) => {
                return (
                  <option key={index} value={index}>{item.name}</option>
                );
              })}
            </select>
          </div>
          <div className='col-md-6 blackBack yellowColor'>
            <span>{dealerChecked != false && dealerData[dealerChecked].busting} %</span>
          </div>
        </div>
        <div className='playerResult'>
            <div className='title'>
              Player
            </div>
            <div className='col-md-12'>
              <div className='flex-side'>
                <div className='col-md-2'></div>
                <div className='col-md-4'>
                  <select value={playerCheckedData[0]} onChange={(e) => {
                        setPlayerCheckedData((prevItems) => {
                          const newItems = [...prevItems];
                          newItems[0] = parseInt(e.target.value);
                          return newItems;
                        });
                      }}>
                          <option value={false} hidden></option>

                    {
                          hardData.map((item, index) => {
                            return (
                              <option key={index} value={index}>{item.content}</option>
                            );
                          })
                        }
                        {
                          softData.map((item, index) => {
                            return (
                              <option key={11 + index} value={11 + index}>{item.content}</option>
                            );
                          })
                        }
                        {
                          pairData.map((item, index) => {
                            return (
                              <option key={19 + index} value={19 + index}>{item.content}</option>
                            );
                          })
                        }
                  </select>
                </div>
                <div className='col-md-6 blackBack yellowColor'>
                  {playerCheckedData.length > 0 && playData[playerCheckedData[0]]}%
                </div>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='flex-side'>
                <div className='col-md-2'>
                  <input type='checkbox' checked={checkbox1} onChange={() => {
                    setCheckbox1(!checkbox1);
                  }} />
                </div>
                <div className='col-md-4'>
                  {
                    checkbox1 && 
                      <select value={playerCheckedData[1]} onChange={(e) => {
                        setPlayerCheckedData((prevItems) => {
                          const newItems = [...prevItems];
                          newItems[1] = parseInt(e.target.value);
                          return newItems;
                        });
                      }}>
                          <option value={false} hidden></option>

                        {
                          hardData.map((item, index) => {
                            return (
                              <option key={index} value={index}>{item.content}</option>
                            );
                          })
                        }
                        {
                          softData.map((item, index) => {
                            return (
                              <option key={11 + index} value={11 + index}>{item.content}</option>
                            );
                          })
                        }
                        {
                          pairData.map((item, index) => {
                            return (
                              <option key={19 + index} value={19 + index}>{item.content}</option>
                            );
                          })
                        }
                      </select>
                  }
                </div>
                
                  {
                    checkbox1 && 
                    <div className='col-md-6 blackBack yellowColor'>{playerCheckedData.length > 1 && playData[playerCheckedData[1]]}%</div>
                  }
                
              </div>
            </div>
            {checkbox1 && 
              <div className='col-md-12'>
                <div className='flex-side'>
                  <div className='col-md-2'>
                    <input type='checkbox' checked={checkbox2} onChange={() => {
                      setCheckbox2(!checkbox2);
                    }} />
                  </div>
                  <div className='col-md-4'>
                    {
                      checkbox2 && 
                        <select value={playerCheckedData[2]} onChange={(e) => {
                          setPlayerCheckedData((prevItems) => {
                            const newItems = [...prevItems];
                            newItems[2] = parseInt(e.target.value);
                            return newItems;
                          });
                        }}>
                          <option value={false} hidden></option>
                          {
                          hardData.map((item, index) => {
                            return (
                              <option key={index} value={index}>{item.content}</option>
                            );
                          })
                        }
                        {
                          softData.map((item, index) => {
                            return (
                              <option key={11 + index} value={11 + index}>{item.content}</option>
                            );
                          })
                        }
                        {
                          pairData.map((item, index) => {
                            return (
                              <option key={19 + index} value={19 + index}>{item.content}</option>
                            );
                          })
                        }

                        </select>
                    }
                  </div>
                  
                    {
                      checkbox2 && 
                      <div className='col-md-6 blackBack yellowColor'>{playerCheckedData.length > 2 && playData[playerCheckedData[2]]}%</div>
                    }
                  
                </div>
              </div>
            }
        </div>
      </div>
      <a href="https://buymeacoffee.com/blackjackstats" className='buymeacoffee' target="_blank">
        <img src="https://media.giphy.com/media/hXMGQqJFlIQMOjpsKC/giphy.gif" alt="Buy Me a Coffee" />
      </a>
      <img src={backgroundImg} alt='background' className='backImg' />
    </div>
  );
}

export default App;
