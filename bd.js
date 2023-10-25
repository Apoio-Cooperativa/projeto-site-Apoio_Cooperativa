let json = []; 
let tbIsRead = true;

const read = async () => {
    $(document).ready(function () {
        $.ajax({
            url: '../bd.php',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                json = data;
                tables(data);
            },
            error: function (xhr, status, error) {
                console.error(status + ': ' + error);
            }
        });
    });
}