AJS.toInit(function(){var c=AJS.$("#baseURL").val();a(null,null);AJS.$("#proj").change(function(e){if(AJS.$("#proj").val()!=="None"){b(AJS.$("#proj").val(),"issue","subTaskId",true)}else{AJS.$("#issue").children().remove();AJS.$("#issue").append(new Option("---select---","None"));AJS.$("#errMsgId").children().remove();a(null,null)}});function b(g,h,e,f){AJS.$.ajax({url:c+"/rest/dealertracks/servicedeskrest/1.0/deskautomationprojects/deskissueTypes.json?projectkey="+g,type:"GET",contentType:"application/json",data:{},success:function(j){var i=j==null?[]:(j.issueType instanceof Array?j.issueType:[j.issueType]);AJS.$("#"+h).children().remove();AJS.$("#"+h).append(new Option("---select---","None"));AJS.$("#"+h).select2("val","None");AJS.$.each(i,function(l,m){AJS.$("#"+h).append(new Option(m.value,m.value))});var k=j==null?[]:(j.subTask instanceof Array?j.subTask:[j.subTask]);AJS.$("#"+e).children().remove();AJS.$("#"+e).append(new Option("---select---","None"));AJS.$("#"+e).select2("val","None");AJS.$.each(k,function(l,m){AJS.$("#"+e).append(new Option(m.value,m.value))});if(f){a(AJS.$("#proj").val(),null)}}})}function d(e){if(e!==null&&e.length>=1){AJS.$.each(e,function(f,g){AJS.$("<tr id="+f+">").html("<td>"+e[f].Project+"</td><td>"+e[f].issueType+"</td><td>"+e[f].subTask+"</td><td>"+e[f].userdn+"</td><td>"+e[f].assignee+"</td><td>"+e[f].group+"</td><td>  <input type='button' class='del button spaced' type='submit'  class='button spaced' value='Delete'/><input type='button' class='edit button spaced' type='submit'  value='Edit'/></td></tr>").appendTo("#records_table")})}else{AJS.$("<tr>").html("<td colspan='7' style='text-align:center'>  No records to display  </td></tr>").appendTo("#records_table")}}function a(g,e){var f="";if(g!==null&&e!==null){f="/rest/dealertracks/servicedeskrest/1.0/automationportal/portalIssues.json?project="+g+"&issueType="+e}else{if(g!==null&&e===null){f="/rest/dealertracks/servicedeskrest/1.0/automationportal/portals.json?project="+g}else{if(g===null&&e===null){f="/rest/dealertracks/servicedeskrest/1.0/automationportal/getAllPortals.json"}}}if(f!==""){AJS.$.ajax({url:c+f,type:"GET",contentType:"application/json",data:{},success:function(h){AJS.$("#records_table tbody tr").remove();d(h)}})}}AJS.$("#issue").change(function(e){if(AJS.$("#proj").val()!=="None"||AJS.$("#issue").val()!=="None"){a(AJS.$("#proj").val(),AJS.$("#issue").val())}});AJS.$("#subTaskId").change(function(e){if(AJS.$("#proj").val()!=="None"||AJS.$("#issue").val()!=="None"||AJS.$("#subTaskId").val()!=="None"){AJS.$.ajax({url:c+"/rest/dealertracks/servicedeskrest/1.0/automationportal/portalIssuesSubTask.json?project="+AJS.$("#proj").val()+"&issueType="+AJS.$("#issue").val()+"&subTask="+AJS.$("#subTaskId").val(),type:"GET",contentType:"application/json",data:{},success:function(f){AJS.$("#records_table tbody tr").remove();d(f)}})}});AJS.$("#btnp_Save").click(function(e){if(AJS.$("#proj").val()!=="None"&&AJS.$("#issue").val()!=="None"&&AJS.$("#subTaskId").val()!=="None"&&AJS.$("#userDn").val()!==""&&AJS.$("#password").val()!==""&&AJS.$("textarea#multiUserPicker").val()!==""&&AJS.$("#multiGroups").val()!=="None"){AJS.$.ajax({url:c+"/rest/dealertracks/servicedeskrest/1.0/automationportal/addPortal.json?project="+AJS.$("#proj").val()+"&issueType="+AJS.$("#issue").val()+"&subTask="+AJS.$("#subTaskId").val()+"&userdn="+AJS.$("#userDn").val()+"&password="+AJS.$("#password").val()+"&assignee="+AJS.$("textarea#multiUserPicker").val()+"&group="+AJS.$("#multiGroups").val(),type:"PUT",contentType:"application/json",data:{},success:function(f){if(f!==null){AJS.$("#records_table tbody tr").remove();d(f)}else{alert("Issue Type already exists   ")}}})}else{alert("Please select required values")}});AJS.$("#records_table tbody tr td .del").live("click",function(){if(confirm("Do you want to delete Recored? ")){var h=AJS.$(this).parent().parent().html();var e=h.split("</td><td>");var g=e[0].replace("<td>","");var f="";if(AJS.$("#proj").val()!=="None"){f=AJS.$("#proj").val()}var i="";if(AJS.$("#issue").val()!=="None"){i=AJS.$("#issue").val()}if(g!==""&&e[1]!==""){AJS.$.ajax({url:c+"/rest/dealertracks/servicedeskrest/1.0/automationportal/deletePortal.json?project="+g+"&issueType="+e[1]+"&group="+e[2]+"&selectedProject="+f+"&selectedIssue="+i,type:"PUT",contentType:"application/json",data:{},success:function(j){AJS.$("#records_table tbody tr").remove();d(j)}})}}});AJS.$("#authenticate").live("click",function(){AJS.$("#errMsgId").children().remove();if(AJS.$("#userDn").val()!==""&&AJS.$("#password").val()!==""){AJS.$.ajax({url:c+"/rest/dealertracks/servicedeskrest/1.0/ldapAuthentication/validate.json?user="+AJS.$("#userDn").val()+"&password="+AJS.$("#password").val(),type:"GET",contentType:"application/json",data:{},success:function(e){if(e!==null){AJS.$("#errMsgId").append("<label style='color:#FF9933;font-weight:bold'>"+e+"</label>")}}})}else{alert("Please select required values")}});AJS.$("#testUser").live("click",function(){AJS.dialog2("#testuser-popup").show();AJS.$("#errPopMsgId").children().remove()});AJS.$("#popup-close-button").click(function(f){f.preventDefault();AJS.dialog2("#testuser-popup").hide()});AJS.$("#testuser-btn").live("click",function(){AJS.$("#errPopMsgId").children().remove();if(AJS.$("#userDn").val()!==""&&AJS.$("#password").val()!==""&&AJS.$("#username").val()!==""){AJS.$.ajax({url:c+"/rest/dealertracks/servicedeskrest/1.0/ldapAuthentication/testPermission.json?user="+AJS.$("#userDn").val()+"&password="+AJS.$("#password").val()+"&username="+AJS.$("#username").val()+"&group="+AJS.$("#multiGroups").val(),type:"GET",contentType:"application/json",data:{},success:function(e){if(e!==null){for(var f=0;f<e.length;f++){AJS.$("#errPopMsgId").append("<label style='color:#FF9933;font-weight:bold'>"+e[f]+"</label><br/>")}}}})}else{alert("Please select required values")}});AJS.$("#editsettings-close-button").click(function(f){f.preventDefault();AJS.dialog2("#editsettings").hide()});AJS.$("#records_table tbody tr td .edit").live("click",function(){AJS.dialog2("#editsettings").show();AJS.$(".error").html("");var f=[];AJS.$(this).closest("tr").find("td").each(function(){f.push(AJS.$(this).text())});AJS.log("PROJECT TO EDIT "+f[0]);AJS.log("ISSUE TYPE TO EDIT "+f[1]);AJS.log("SUBTASK TO EDIT "+f[2]);AJS.log("USER DN TO EDIT "+f[3]);AJS.log("ASSIGNEE TO EDIT "+f[4]);AJS.log("GROUP TO EDIT "+f[5]);var e="";AJS.$.ajax({url:c+"/rest/dealertracks/servicedeskrest/1.0/automationportal/portalIssuesSubTask.json?project="+f[0]+"&issueType="+f[1]+"&subTask="+f[2],type:"GET",contentType:"application/json",data:{},success:function(g){e=g[0].password},error:function(g){alert("ERROR RETREIVING PASSWORD, DIALOG WILL CLOSE");AJS.dialog2("#editsettings").hide()}});AJS.$("#projinEdit").val(f[0]);AJS.$("#issueEdit").val(f[1]);AJS.$("#subTaskEdit").val(f[2]);AJS.$("#userDnEdit").val(f[3]);AJS.$("#multiUserPickerEdit").val(f[4]);AJS.$("#multiGroupsEdit").val(f[5]);setTimeout(function(){AJS.$("#passwordEdit").val(e)},200)});AJS.$("#editsettings-save-button").click(function(k){if(editSettingDialogNotEmpty()){var m=AJS.$("#projinEdit").val();var f=AJS.$("#issueEdit").val();var l=AJS.$("#subTaskEdit").val();var j=AJS.$("#userDnEdit").val();var i=AJS.$("#passwordEdit").val();var g=AJS.$("#multiUserPickerEdit").val();var h=AJS.$("#multiGroupsEdit").val();AJS.$.ajax({url:c+"/rest/dealertracks/servicedeskrest/1.0/automationportal/updatePortal.json?project="+m+"&issueType="+f+"&subTask="+l+"&userdn="+j+"&password="+i+"&assignee="+g+"&group="+h,type:"PUT",contentType:"application/json",data:{},success:function(e){if(e!==null){AJS.$("#records_table tbody tr").remove();d(e)}else{alert("Issue Type already exists   ")}}});AJS.dialog2("#editsettings").hide()}})});AJS.$(function(){AJS.$("#proj").auiSelect2();AJS.$("#issue").auiSelect2();AJS.$("#subTaskId").auiSelect2();AJS.$("#approval").auiSelect2()});function editSettingDialogNotEmpty(){var b=true;AJS.$(".error").html("");AJS.$(".mandatorysdf").each(function(){if(!AJS.$(this).val()){AJS.log("Found a blank field, cant save");AJS.$(this).focus().siblings(".error").html("This field cannot be left blank");b=false}});var a=AJS.$("#multiGroupsEdit").val();if(a==="None"){AJS.log("Please select some group");AJS.$("#multiGroupsEdit").focus().siblings(".error").html("Please select a group");b=false}return b};