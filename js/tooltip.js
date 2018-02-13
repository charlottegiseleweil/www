#Master.on("mouseover", function(d, i){
                var pctVal = (100*(d['endAngle']-d['startAngle'])/
                              (2*Math.PI)).toPrecision(3);
                pieTooltip.html(interventionsNames[i] + '<br />' +
                    (d['value'].toFixed(2))*100 + ' % <br />'); //éventuellement ajouter npix
                return pieTooltip.style("visibility", "visible");
            })
            .on("mousemove", function(){return pieTooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
            .on("mouseout", function(){return pieTooltip.style("visibility", "hidden");})
			.each(function(d) { this._current = d; });
			Natural capital assessments reveal the specific benefits provided by nature in order to develop approaches to manage environmental assets sustainably and take nature into account in major decisions. Effective communication of their results, including clear visuals, is crucial for supporting decision-makers. However, no consolidated practical guidance exists to support analysts in synthesizing their results, and visualization tools are scattered. The present work addresses this gap, and aims to facilitate understanding and spread of natural capital assessments, hoping to increase engagement in a field with large potential for impact.

First, we gather the existing knowledge on design strategies for displaying complex information through a literature review and surveying analysts in the field. Complex information refers here to the specificities of natural capital data, i.e typically large numbers of maps and aspatial statistics that result from considering multiple objectives, scenarios, and uncertainties.

Secondly, this work scopes the gaps in the field by analyzing and prioritizing the visualization needs, through a survey and interviews. Findings from this assessment guide the development of (1) a toolbox to help analysts in their task of communicating natural capital information; and (2) an innovative tool to display natural capital results, merging knowledge from previous points in the form of a prototype user-friendly dynamic web visualization. In an interactive dashboard combining multiple linked views, this tool allows visualization of tradeoffs between objectives, comparison of scenarios and assessment of uncertainty.