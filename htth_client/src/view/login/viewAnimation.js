
export default (self, my, action = 'dungyen') => {
    if(!my) my = self.my;
    let nhanvat = new PIXI.Container();

    let skin = my;


    let idSheet = my.id;
    my.id = my.id || "";

    if(idSheet && idSheet.length >=1) {
        let list = self.getidSprite(idSheet);
        list.forEach(element => {
            if(my.skin[element.type]) {
                my.skin[element.type] = element.name;
            }
        });
    }

    let src_lung = self.getImg(skin.lung);
    let src_quan = self.getImg(skin.quan);
    let src_ao = self.getImg(skin.ao);
    let src_tay = self.getImg(skin.tay);
    let src_dau = self.getImg(skin.dau);
    let src_toc = self.getImg(skin.toc);
    let src_non = self.getImg(skin.non);


    let lung = new PIXI.Sprite(self.coverImg(src_lung[action].src[0]));
    lung.name = 'lung';
    lung.scale.set(0.5);
    lung.x =

        nhanvat.addChild(lung);

    let quan = new PIXI.Sprite(self.coverImg(src_quan[action].src[0]));
    quan.name = 'quan';
    quan.scale.set(0.4);
    nhanvat.addChild(quan);

    let ao = new PIXI.Sprite(self.coverImg(src_ao[action].src[0]));
    ao.name = 'ao';
    nhanvat.addChild(ao);
    ao.scale.set(0.5);

    let tay = new PIXI.Sprite(self.coverImg(src_tay[action].src[0]));
    tay.name = 'tay';
    tay.scale.set(0.5);

    let dau = new PIXI.Sprite(self.coverImg(src_dau[action].src[0]));
    dau.name = 'dau';
    nhanvat.addChild(dau);
    dau.scale.set(0.5);

    let toc = new PIXI.Sprite(self.coverImg(src_toc[action].src[0]));
    toc.name = 'toc';
    nhanvat.addChild(toc);
    toc.scale.set(0.5);

    let non = new PIXI.Sprite(self.coverImg(src_non[action].src[0]));
    non.name = 'non';
    nhanvat.addChild(non);
    non.scale.set(0.5);

    nhanvat.addChild(tay);


    ao.x = src_ao[action].x;
    ao.y = src_ao[action].y;
    quan.x = src_quan[action].x;
    quan.y = src_quan[action].y;

    tay.x = src_tay[action].x;
    tay.y = src_tay[action].y;

    toc.x = src_toc[action].x;
    toc.y = src_toc[action].y;

    non.x = src_non[action].x;
    non.y = src_non[action].y;

    lung.x = src_lung[action].x;
    lung.y = src_lung[action].y;

    dau.xy = 0;

    let time = setInterval(() => {
        let check1 = self.findText('nhanvat');
        if(!check1) {
            clearInterval(time);
            console.log('delete created new Sprite')
            return;
        }
        if(dau.xy ===0) {
            dau.y+=1;
            ao.y+=1;
            lung.y+=1;
            tay.y+=1;
            toc.y+=1;
            non.y+=1;
            dau.xy = 1;
        }
        else
        {
            dau.y -=1;
            ao.y -=1;
            ao.first = 0;
            dau.xy = 0;
            lung.y -=1;
            tay.y -=1;
            toc.y -=1;
            non.y -=1;

        }
    }, 200);

    nhanvat.time = time;

    return nhanvat;
}

