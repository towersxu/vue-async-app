/**
 * Created by taox on 16-2-29.
 */
module.exports = {
  transFileSize:function(){

  },
  /**
   * dataURL转Blob
   * @param dataurl dataURL
   * @returns {binary} blob
   */
  dataURLtoBlob:function(dataurl){
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
  },
  /**
   * blob或者file转dataURL
   * @param blob binary large object or file
   * @fn callback
   */
  blobOrFileToDataUrl:function(blob,fn){
    var a = new FileReader();
    a.onload = function(e){
      fn(e.target.result);
    };
    a.readAsDataURL(blob);
  },
  transFileSize:function(bytes){
    var measures = ['B','KB','MB','GB','TB'],idx=0;
    if(typeof bytes !=='number'){
      bytes = Number(bytes) || 0;
    }
    while(bytes > 1024){
      bytes = bytes/1024;
      idx++;
    }
    return bytes.toFixed(2)+measures[idx];
  }
};
