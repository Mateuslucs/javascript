var agora = new Date()
diasem = agora.getDay()
/*
0 - dom
1 - seg
2 - ter
3 - quar
4 - quin
5 - sex
6 - sab
*/

switch(diasem){
    case(0):
        console.log('dom')
        break
    case(1):
        console.log('seg')
        break
    case(2):
        console.log('ter')
        break
    case(3):
        console.log('quar')
        break
    case(4):
        console.log('qui') 
        break  
    case(5):
        console.log('sex')
        break
    case(6):
        console.log('sab') 
        break                
}