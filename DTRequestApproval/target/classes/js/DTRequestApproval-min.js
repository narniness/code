AJS.toInit(function(){var b=AJS.$("#baseURL").val();function c(){AJS.$.ajax({url:b+"/rest/dealertrack/approvalrest/1.0/requestApproverResource/approval",type:"GET",contentType:"application/json",success:function(d){AJS.$("#chgUrl").attr("value",d.chgUrl);AJS.$("#remoteLinkUrl").attr("value",d.remoteLinkUrl);AJS.$("#applinkId").attr("value",d.applinkId)}})}function a(){AJS.$.ajax({url:b+"/rest/dealertrack/approvalrest/1.0/requestApproverResource/approverSave",type:"PUT",contentType:"application/json",data:'{ "chgUrl": "'+AJS.$("#chgUrl").attr("value")+'","remoteLinkUrl": "'+AJS.$("#remoteLinkUrl").attr("value")+'", "applinkId": "'+AJS.$("#applinkId").attr("value")+'"}',processData:false,success:function(){JIRA.Messages.showSuccessMsg("Request Approver Configuration Saved Successfully!")},error:function(f,d,e){JIRA.Messages.showErrorMsg("Request Approver Configuration could not be saved!<br><b>Server returned the following Error:</b><br> "+f.responseText)}})}c();AJS.$("#approverSave").live("click",function(d){a()})});