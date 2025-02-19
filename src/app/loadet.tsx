// eslint-disable-next-line import/no-anonymous-default-export
export default `
body {
display: block;
}
/* From Uiverse.io by mrpumps31232 */ 
.loading-wave {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  indet: -5px;
  background-color: #fff;
  z-index: 9999;
}

.loading-bar {
  width: 20px;
  height: 10px;
  margin: 0 5px;
  background-color: #3498db;
  border-radius: 5px;
  animation: loading-wave-animation 1s ease-in-out infinite;
}

.loading-bar:nth-child(2) {
  animation-delay: 0.1s;
}

.loading-bar:nth-child(3) {
  animation-delay: 0.2s;
}

.loading-bar:nth-child(4) {
  animation-delay: 0.3s;
}

@keyframes loading-wave-animation {
  0% {
    height: 10px;
  }

  50% {
    height: 50px;
  }

  100% {
    height: 10px;
  }
}

`;
