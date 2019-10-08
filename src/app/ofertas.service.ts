import { URL_API } from './app.api';
import { Oferta } from './shared/oferta.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class OfertasService {
    constructor(private http: HttpClient) { }


    public getOfertas(): Promise<Oferta[]> {
        //efetuar uma requisição http
        //retornar um promise Oferta[]
        return this.http.get<Oferta[]>(`${URL_API}/ofertas?destaque=true`).toPromise();

    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get<Oferta[]>(`${URL_API}/ofertas?categoria=${categoria}`).toPromise();
    }

    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.http.get<Oferta>(`${URL_API}/ofertas?id=${id}`).toPromise().then((oferta: Oferta) => { return oferta[0] });
    }

    public getComoUsarOfertaPorId(id: number):Promise<string>{
        return this.http.get(`${URL_API}/como-usar?id=${id}`).toPromise().then((resposta:any) => {return resposta[0].descricao;});
    }

    public getOndeFicaOfertaPorId(id: number):Promise<string>{
        return this.http.get(`${URL_API}/onde-fica?id=${id}`).toPromise().then((resposta:any) => {return resposta[0].descricao;});
    }
    /*
    public getOfertas2(): Promise<Oferta[]> {
        return new Promise((resolve, reject) => {
            //Algum tipo de processamento, que ao finalizar, chama a função resolve, ou a função reject.
            //console.log('Será que passou por aqui ?')
            let deu_certo = true;
            if (deu_certo) {
                setTimeout(() => resolve(this.ofertas), 3000);
                //resolve(this.ofertas);
            } else {
                reject({ codigo_erro: 404, mensagem_erro: 'Server Not Found XYZ' });
            }


        })
            .then((ofertas: Oferta[]) => {
                //Fazer alguma tratativa
                console.log('Primeiro then');
                return ofertas;
            })
            .then((ofertas: Oferta[]) => {
                //Fazer uma outra tratativa
                console.log('Segundo then');
                return new Promise((resolve2, reject2) => {
                    setTimeout(() => { resolve2(ofertas) }, 3000);
                });
            })
            .then((ofertas: Oferta[]) => {
                console.log('terceiro then executado após 3 segundos porque estava aguardando uma promise ser resolvida');                
                return ofertas;
            })
    }*/
}