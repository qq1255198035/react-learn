export const type = {
    MENU: 'MENU'
}
export function switchMenu(name){
    console.log(111)
    return{
        type: type.MENU,
        name
    }
}