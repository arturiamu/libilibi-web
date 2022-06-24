
function tip_success(that,message){
    that.$message({
        message: message,
        type: 'success'
    });
}

function tip_warning(that,message){
    that.$message({
        message: message,
        type: 'warning'
    });
}

function tip_info(that,message){
    that.$message(message);
}

function tip_err(that,message){
    that.$message(message).error;
}

export {
    tip_success,
    tip_warning,
    tip_info,
    tip_err
}
