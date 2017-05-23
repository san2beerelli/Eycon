import {injectGlobal} from 'styled-components';

const defaultProps = {
    useCustomCdnStyles:false,
    insertedFAUrl: false,
    insertedMDUrl: false,
    faUrl: `https://maxcdn.bootstrapcdn.com/font-awesome/faVersion/css/font-awesome.min.css`,
    faVersion: `4.7.0`,
    mdUrl: `https://fonts.googleapis.com/icon?family=Material+Icons`
}

class RFUrl{
    constructor(){
       this.useCustomCdnStyles = defaultProps.useCustomCdnStyles;
       this.insertedFAUrl = defaultProps.insertedFAUrl;
       this.insertedMDUrl = defaultProps.insertedMDUrl;
       this.faVersion = defaultProps.faVersion;
       this.faUrl = defaultProps.faUrl;
       this.mdUrl = defaultProps.mdUrl;
    }
    setUrl(type){
        if(!this.useCustomCdnStyles){
            if(type == "fa" && !this.insertedFAUrl){
                this.faUrl = this.faUrl.split('faVersion').join(`${this.faVersion}`); 
                injectGlobal `@import url(${this.faUrl});`;
                this.insertedFAUrl = true;
            }
            if(type == "md" && !this.insertedMDUrl){
                console.log("md");
                injectGlobal `@import url(${this.mdUrl});`;
                this.insertedMDUrl = true;
            }
        }
    }
}

export default (new RFUrl);