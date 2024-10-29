$(document).ready(function() {

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    });

    $('#cep').mask('00000-000', {
        placeholder: '012345-678'
    });
    
    $('.menu-hamburguer').click(function() {
        $('.menu').slideToggle();
    })

    $('#form-geral').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            cep: {
                required: true
            },
            tenisDeInteresse: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome!',
            email: 'Por favor, insira um email válido!',
            telefone: 'Por favor, insira seu telefone!'
        },

        submitHandler: function (form) {
            Swal.fire({
                title: 'Sucesso!',
                text: 'Sua requisição foi enviada para análise!',
                icon: 'success',
                confirmButtonText: 'OK',
                customClass: {
                    popup: 'meu-swal-popup2', 
                    title: 'meu-swal-titulo2',
                    text: 'custon-textsuccess',
                    confirmButton: 'meu-swal-botao2'
                }
            }).then(() => {
                form.reset();
            })
        },

        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                Swal.fire({
                    title: 'Erro!',
                    text: `Existem ${camposIncorretos} campos incorretos.`,
                    icon: 'error',
                    confirmButtonText: 'OK',
                    customClass: {
                        popup: 'meu-swal-popup', 
                        title: 'meu-swal-titulo',
                        text: 'custon-texterror',
                        confirmButton: 'meu-swal-botao'
                    }    
                })
            }
        }
    })
})