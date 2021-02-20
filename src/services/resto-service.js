
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
}