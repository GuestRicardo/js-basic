exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variabel local';
    next();
};

exports.outroMidlleware = (req, res, next)=>{
    next();
};

exports.checkCSRFerror=(erro, req, res, next)=>{
    if(erro && 'EBADCSRFTOKEN' === erro.code){
        return res.render('404');
    }
}