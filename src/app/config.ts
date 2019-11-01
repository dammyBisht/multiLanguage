declare var jQuery: any;

export var config = {
    scanFunc: () => {
        setTimeout(function () {
            jQuery('.component').each(function () {
                var eachCount = 0;
                var oldAttr = '';
                var thisElement = jQuery(this);
                jQuery.each(this.attributes, function () {
                    // this.attributes is not a plain object, but an array
                    // of attribute nodes, which contain both the name and value
                    if (this.specified && eachCount == 0) {
                        thisElement.find('*').removeAttr(oldAttr);
                        thisElement.find('*').attr(this.name, true);
                        oldAttr = this.name;
                        console.log(this.name);
                        eachCount = 1;
                    }
                });
            });
        }, 200)
    }

}