
export default class RestoService {
  _link = 'http://localhost:3001';

  async getResource(url) {
    const res = await fetch(`${this._link}${url}`);
    if(!res.ok) {
      throw new Error(`Didn't get data from ${this._link}${url}, status: ${res.status}`)
    }
    const data = await res.json();
    return data;
  }

  async getMenuItems(){
    return await this.getResource('/menu/')
  }

  async postCartItems(body){
    const orderNumber = await this.getOrderNumber();
    const newOrder = {
      id: orderNumber,
      order: body
    }
    const response = await fetch(`${this._link}/orders`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(newOrder)
    });

    if(!response.ok) {
      throw new Error(`I don't know what is wrong =( watch: ${response.status})`)
    }
  }

  async getOrderNumber(){
    const orders = await fetch(`${this._link}/orders`);
    return orders.length + 1
  }
}