package com.dt.jira.servicedesk.customize.ui;

import com.atlassian.jira.issue.fields.rest.json.beans.JiraBaseUrls;
import com.atlassian.sal.api.ApplicationProperties;
import com.atlassian.templaterenderer.TemplateRenderer;
import com.dt.jira.servicedesk.customize.ao.ServiceDeskMain;
import com.dt.jira.servicedesk.customize.service.ServiceDeskService;
import com.dt.jira.servicedesk.customize.rest.ServiceDeskMainFields;


import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/**
 *ServiceDesk ParentServlet get all service desk fields
 * @author srinadh.garlapati
 *
 */
public class ServiceDeskParentServlet extends HttpServlet{

	private final TemplateRenderer renderer;
	private final ApplicationProperties applicationProperties;	
	private final JiraBaseUrls jiraBaseUrls;
	private final ServiceDeskService serviceDeskService;
	public ServiceDeskParentServlet(TemplateRenderer renderer,
			ApplicationProperties applicationProperties,
			JiraBaseUrls jiraBaseUrls, ServiceDeskService serviceDeskService) {
		this.applicationProperties=applicationProperties;
		this.renderer = renderer;
		this.jiraBaseUrls = jiraBaseUrls;
		this.serviceDeskService=serviceDeskService;
	}
	
	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {					 
			Map<String, Object> ctx = new HashMap<String, Object>();
	        List<ServiceDeskMain> ServiceDeskMainFieldsList = serviceDeskService.findAllMainFields();
			if(ServiceDeskMainFieldsList !=null && ServiceDeskMainFieldsList.size()>0 ){												
				ctx.put("servicedesks", ServiceDeskMainFieldsList);				
	        }
	        
	       ctx.put("projectKey", request.getParameter("projectKey"));	
		   ctx.put("baseURL", applicationProperties.getBaseUrl());	
		   
			response.setContentType("text/html;charset=utf-8");
			renderer.render("templates/welcomeportalconfig.vm",ctx, response.getWriter());
						
	}
}