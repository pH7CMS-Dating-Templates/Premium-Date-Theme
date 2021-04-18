/*
 * Author:        Pierre-Henry Soria <hi@ph7.me>
 * Copyright:     (c) 2012-2021, Pierre-Henry Soria. All Rights Reserved.
 * License:       GNU General Public License; See PH7.LICENSE.txt and PH7.COPYRIGHT.txt in the root directory.
 */

function display_status() {
    var sSelected = 'select#status option:selected';
    var sStatusTitle = $(sSelected).text();
    var iStatusVal = $(sSelected).val();
    var sCssClass = (iStatusVal == 1 ? 'green' : (iStatusVal == 2 ? 'orange' : (iStatusVal == 3 ? 'red' : 'gray')));
    $('#status_div').html('<span class="' + sCssClass + '" title="' + sStatusTitle + '">•</span>');
}

function init_status() {
    display_status();
}
