import CaverJS from 'caver-js';
const caver = new CaverJS('https://api.baobab.klaytn.net:8651/');

(() => {
    caver.klay.getBlockNumber().then((height) => {
        document.getElementById("block-number").innerText = height;
    });    
})();