import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.class';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public movies: Movie[] = [
    new Movie(1, "Tôi thấy hoa vàng trên cỏ xanh", "https://vi.wikipedia.org/wiki/T%C3%B4i_th%E1%BA%A5y_hoa_v%C3%A0ng_tr%C3%AAn_c%E1%BB%8F_xanh", "Nguyễn Nhật Ánh"),
    new Movie(2, "Mắt biết", "https://vi.wikipedia.org/wiki/M%E1%BA%AFt_bi%E1%BA%BFc_(phim)", "Nguyễn Nhật Ánh"),
    new Movie(3, "Cô gái năm ấy chúng ta cùng theo đuổi", "https://vi.wikipedia.org/wiki/C%C3%B4_g%C3%A1i_n%C4%83m_%E1%BA%A5y_ch%C3%BAng_ta_c%C3%B9ng_theo_%C4%91u%E1%BB%95i", "Kha Chấn Đông"),
    new Movie(4, "Tháng năm để dành", 'https://vieon.vn/thang-5-de-danh.html', "Nguyễn Nhật Ánh")
  ];
  constructor() { }
  public addMovie(name: string, link: string, author: string): void {
    var i = this.getLastId() + 1;
    this.movies.push({
      id: i,
      name: name,
      link: link,
      author: author
    });
  }
  getLastId():any{
    if(this.movies.length==0){
        return 0;
    }
    else{
        var arr = this.movies.sort((a:any, b:any) => {
            if (a.id > b.id) return 1;
            else if (a.id < b.id) return -1;
            else return 0;
          });
          return arr[arr.length-1].id;
    }
  }
}
