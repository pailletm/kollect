function insermodcat(a,t,e,i){"use strict";$("#valajax").show(),$.ajax({url:"modeles/ajax/observatoire/catinser.php",type:"POST",dataType:"json",data:{sel:a,id:t,lib:e,mod:i},success:function(t){"Oui"==t.statut?($("#valajax").hide(),$("#mes").html(""),"non"==i&&($("#idcat").val(""),$("#libcat").val(""),$("#crecat").hide(),liste(a))):($("#valajax").hide(),$("#mes").html(t.mes))}})}function liste(a){"use strict";$("#valajax").show(),$("#crecat").hide(),$.ajax({url:"modeles/ajax/observatoire/catfamille.php",type:"POST",dataType:"json",data:{sel:a},success:function(a){"Oui"==a.statut?($("#valajax").hide(),$("#mes").html(""),$("#tabfam").html(a.tab),$("#tabcat").html(a.tabcat),$("#BttC").show(),a.unique&&$("#BttC").hide()):($("#tabfam").html(""),$("#tabcat").html(""),$("#BttC").hide(),$("#mes").html(a.mes),$("#valajax").hide())}})}$(document).ready(function(){"use strict";$("#valajax").hide(),$("#crecat").hide(),$("#BttC").hide()}),$("#BttC").click(function(){$("#crecat").show()}),$("#BttV").click(function(){"use strict";var a=$("#choix option:selected").val(),t=$("#idcat").val(),e=$("#libcat").val(),i="non";insermodcat(a,t,e,i)}),$("#choix").change(function(){"use strict";var a=$("#choix option:selected").val();"NR"!=a?liste(a):($("#tabfam").html(""),$("#tabcat").html(""),$("#crecat").hide(),$("#BttC").hide())}),$("#tabfam").on("change",".fam",function(){"use strict";var a=$(this).parent().parent().attr("id"),t=$(this).val(),e=$("#choix option:selected").val();$("#valajax").show(),$.ajax({url:"modeles/ajax/observatoire/catmodfam.php",type:"POST",dataType:"json",data:{sel:e,id:a,vern:t},success:function(a){"Oui"==a.statut?($("#valajax").hide(),$("#mes").html("")):($("#mes").html(a.mes),$("#valajax").hide())}})}),$("#tabfam").on("change",".selcat",function(){"use strict";var a=$(this).parent().parent().attr("id"),t=$(this).val(),e=$("#choix option:selected").val();$("#valajax").show(),$.ajax({url:"modeles/ajax/observatoire/catinsfam.php",type:"POST",dataType:"json",data:{sel:e,id:a,cat:t},success:function(a){"Oui"==a.statut?($("#valajax").hide(),$("#mes").html("")):($("#mes").html(a.mes),$("#valajax").hide())}})}),$("#tabcat").on("change",".selcat2",function(){"use strict";var a=$("#choix option:selected").val(),t=$(this).parent().parent().attr("id"),e=$(this).val(),i="oui";insermodcat(a,t,e,i)});