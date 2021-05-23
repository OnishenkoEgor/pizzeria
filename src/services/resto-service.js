export default class RestoService {
    _serviceUrl = 'http://localhost:3002/'
    async getMenuItems() {
        let response = this._getData('menu');

        return response
    }
    async getMainInfo(){
        let response = await this._getData('mainInfo')
        return response
    }
    async getSingleItem(id) {
        let response = this._getData(`menu/${id}`);
        return response
    }

    async _getData(url) {
        return await fetch(this._serviceUrl + url)
            .then(res => {
                if (!res.ok) {
                    throw new Error('server side error')
                }
                return res.json();
            })
            .catch(e => console.error(e, '- front side error'))
    }
    async sendData(data){
        try{
            await fetch(`${this._serviceUrl}order/`,{
                method:'POST',
                body:JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                  }
            })
            
        }
        catch(e){
            console.error('POST CART DATA WAS ERRORED',e)
        }
    }
}