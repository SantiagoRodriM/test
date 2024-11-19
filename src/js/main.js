import { BleClient } from '@capacitor-community/bluetooth-le';
//await BleClient.initialize({ androidNeverForLocation: true });

export async function scan() {
  try {
    await BleClient.initialize();

    await BleClient.requestLEScan(
      {
        //services: [HEART_RATE_SERVICE],
      },
      (result) => {
        console.log('received new scan result', result);
      }
    );

    setTimeout(async () => {
      await BleClient.stopLEScan();
      console.log('stopped scanning');
    }, 5000);
  } catch (error) {
    console.error(error);
  }
}

const button1 = document.getElementById("button1");
button1.addEventListener('click', () => {
    scan();
})