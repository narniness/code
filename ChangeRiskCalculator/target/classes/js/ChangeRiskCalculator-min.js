AJS.toInit(function(){var a=AJS.$("#baseURL").val();AJS.$.ajax({url:a+"/rest/dealertrack/riskCalculationrest/1.0/riskCalculationResource/riskConditions.json",type:"GET",contentType:"application/json",data:{},success:function(b){AJS.$("#risk-conditions-table tbody tr").remove();if(b!==null&&b.length>=1){AJS.$.each(b,function(c,d){AJS.$("<tr id="+c+">").html("<td>"+b[c].question1+"</td><td>"+b[c].question2+"</td><td>"+b[c].question3+"</td><td>"+b[c].question4+"</td><td>"+b[c].condition+"</td><td>"+b[c].result+"</td><td><input type='button'  id='"+b[c].conditionID+"'   class='delCondition'  value='Delete'  /></td></tr>").appendTo("#risk-conditions-table")})}else{AJS.$("<tr>").html("<td colspan='5' style='text-align:center'>  No records to display  </td></tr>").appendTo("#risk-conditions-table")}}});AJS.$("#add_risk").live("click",function(){if((AJS.$("#conditionID").val()!=="")&&(AJS.$("#resultID").val()!=="")){AJS.$.ajax({url:a+"/rest/dealertrack/riskCalculationrest/1.0/riskCalculationResource/addRiskCondition.json?question1="+AJS.$("#1").val()+"&question2="+AJS.$("#2").val()+"&question3="+AJS.$("#3").val()+"&question4="+AJS.$("#4").val()+"&condition="+AJS.$("#conditionID").val()+"&result="+AJS.$("#resultID").val(),type:"PUT",contentType:"application/json",data:{},success:function(b){AJS.$("#risk-conditions-table tbody tr").remove();if(b!==null&&b.length>=1){AJS.$.each(b,function(c,d){AJS.$("<tr id="+c+">").html("<td>"+b[c].question1+"</td><td>"+b[c].question2+"</td><td>"+b[c].question3+"</td><td>"+b[c].question4+"</td><td>"+b[c].condition+"</td><td>"+b[c].result+"</td><td><input type='button' id='"+b[c].conditionID+"'  class='delCondition' value='Delete'  /></td></tr>").appendTo("#risk-conditions-table")})}else{AJS.$("<tr>").html("<td colspan='5' style='text-align:center'>  No records to display  </td></tr>").appendTo("#risk-conditions-table")}}})}else{alert("Please select required feilds")}});AJS.$(".delCondition").live("click",function(b){AJS.$.ajax({url:a+"/rest/dealertrack/riskCalculationrest/1.0/riskCalculationResource/deleteRiskCondition.json?conditionId="+b.target.id,type:"PUT",contentType:"application/json",data:{},success:function(c){AJS.$("#risk-conditions-table tbody tr").remove();if(c!==null&&c.length>=1){AJS.$.each(c,function(d,e){AJS.$("<tr id="+d+">").html("<td>"+c[d].question1+"</td><td>"+c[d].question2+"</td><td>"+c[d].question3+"</td><td>"+c[d].question4+"</td><td>"+c[d].condition+"</td><td>"+c[d].result+"</td><td><input type='button' id='"+c[d].conditionID+"'  class='delCondition' value='Delete'  /></td></tr>").appendTo("#risk-conditions-table")})}else{AJS.$("<tr>").html("<td colspan='5' style='text-align:center'>  No records to display  </td></tr>").appendTo("#risk-conditions-table")}}})})});AJS.$(function(){AJS.$("select").auiSelect2()});