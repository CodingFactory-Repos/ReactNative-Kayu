import { useCodeScanner } from 'react-native-vision-camera'

const codeScanner = useCodeScanner({
  codeTypes: ['qr', 'ean-13'],
  onCodeScanned: (codes) => {
    console.log(`Scanned ${codes.length} codes!`)
  }
})

return <Camera {...props} codeScanner={codeScanner} />
