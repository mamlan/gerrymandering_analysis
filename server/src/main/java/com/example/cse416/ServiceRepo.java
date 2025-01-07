package com.example.cse416;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.example.cse416.constants.Group;
import com.example.cse416.constants.StateID;
import com.example.cse416.constants.Type;
import com.example.cse416.model.*;
import com.example.cse416.repository.BoxWhiskerRepo;
import com.example.cse416.repository.DemographicRepo;
import com.example.cse416.repository.DistrictBoundaryRepo;
import com.example.cse416.repository.DistrictPlanRepo;
import com.example.cse416.repository.EnsembleSummaryRepo;
import com.example.cse416.repository.DPlanSummaryRepo;
import com.example.cse416.repository.DPlanDataRepo;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;


import org.springframework.stereotype.Service;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ServiceRepo {
    @Autowired
    private DemographicRepo demographicRepo;
    CoordinatesConverter converter;

    @Autowired
    private DistrictBoundaryRepo districtBoundaryRepo;

    @Autowired
    private DistrictPlanRepo districtPlanRepo;
    @Autowired
    private DPlanSummaryRepo dps;
    @Autowired
    private BoxWhiskerRepo boxWhiskerRepo;
    @Autowired
    private EnsembleSummaryRepo ensembleSummaryRepo;
    @Autowired
    private DPlanDataRepo dPlanDataRepo;
;

    @Cacheable(value = "demographics", key = "#state")
    public List<Demographics> getDemographicsData(StateID state) throws IOException {
        try {
            List<Demographics> d = demographicRepo.findByState(state);
            return d;
        } catch (Exception e) {
            System.err.println("Error loading demographic data: " + e.getMessage());
            throw new IOException("Failed to load demographic data", e);
        }

    }
    @Cacheable(value = "boundary", key = "#state")
    public DistrictBoundary getDistrictBoundary(StateID state) throws IOException{
        try{
            DistrictBoundary db = districtBoundaryRepo.getDistrictBoundaries(state);
            System.out.println(db);
            return db;
        }catch(Exception e){
            System.err.println("Error loading district line data: " + e.getMessage());
            throw new IOException("Failed to load district boundary lines data", e);
        }
    }
    @Cacheable(value = "districtplans", key = "T(java.util.Objects).hash(#state, #type, #number)")
    public DistrictPlan getDistrictPlanData(StateID state, Type type, int number) throws IOException{
        try{
        DistrictPlan dp = districtPlanRepo.findByStateAndTypeAndNumber(state, type, number);
        return dp;
        }
        catch(Exception e){
            System.out.println(e.getMessage());
            throw new IOException(e);
        }
    }
    @Cacheable(value = "dplansummary", key = "T(java.util.Objects).hash(#state, #type, #number)")
    public DistrictPlanSummary getDPlanSummary(StateID state, String type, int number) throws IOException {
        try {
            System.out.println("inside dplan summary, point reached");
            DistrictPlanSummary ed = dps.findByStateAndTypeAndNumber(state, type, number);
            return ed;
    } catch (Exception e) {
        System.err.println("Error loading ensemble data: " + e.getMessage());
        throw new IOException("Failed to load ensemble data", e);
        }
    }
    @Cacheable(value = "boxwhisker")
    public BoxWhisker getBoxWhisker() throws IOException {
        try {
            BoxWhisker bw = boxWhiskerRepo.findSingleBoxWhisker();
            return bw;
        } catch (Exception e) {
            System.err.println("Error loading ensemble data: " + e.getMessage());
            throw new IOException("Failed to load ensemble data", e);
        }
    }
    @Cacheable(value = "dplandata", key = "T(java.util.Objects).hash(#state, #type, #number)")
    public DistrictPlanData getDPlanData(StateID state, Type type, int number) throws IOException{
        try{
            System.out.println("inside dplan, point reached");

            DistrictPlanData es = dPlanDataRepo.findByStateAndTypeAndPlan(state, type, number);
            System.out.println(es);
        return es;
        }
        catch(Exception e){
            System.out.println(e.getMessage());
            throw new IOException(e);
        }
    }
    @Cacheable(value = "ensemblesummary", key = "T(java.util.Objects).hash(#state, #type)")
    public EnsembleSummary getEnsembleSummary(StateID state, Type type) throws IOException{
        try{
            EnsembleSummary es = ensembleSummaryRepo.getEnsembleSummary(state, type);
            System.out.println("es returned");
            return es;
        }
        catch(Exception e){
            System.out.println(e.getMessage());
            throw new IOException(e);
        }
    }

}