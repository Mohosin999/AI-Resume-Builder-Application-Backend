import type { Schema, Attribute } from '@strapi/strapi';

export interface SkillsSkills extends Schema.Component {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'Skills';
    icon: 'apps';
  };
  attributes: {
    name: Attribute.String;
    rating: Attribute.Integer;
  };
}

export interface ProjectsProject extends Schema.Component {
  collectionName: 'components_project_projects';
  info: {
    displayName: 'Projects';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    projectsName: Attribute.String;
    workSummary: Attribute.Text;
  };
}

export interface GithubContributionGithubContribution extends Schema.Component {
  collectionName: 'components_github_contribution_github_contributions';
  info: {
    displayName: 'GithubContribution';
    icon: 'crown';
    description: '';
  };
  attributes: {
    projectsName: Attribute.String;
    workSummary: Attribute.Text;
  };
}

export interface ExperienceExperience extends Schema.Component {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'Experience';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    companyName: Attribute.String;
    city: Attribute.String;
    state: Attribute.String;
    startDate: Attribute.String;
    endDate: Attribute.String;
    currentlyWorking: Attribute.Boolean;
    workSummary: Attribute.RichText;
  };
}

export interface EducationEducation extends Schema.Component {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'Education';
    icon: 'book';
  };
  attributes: {
    universityName: Attribute.String;
    degree: Attribute.String;
    major: Attribute.String;
    startDate: Attribute.String;
    endDate: Attribute.String;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'skills.skills': SkillsSkills;
      'projects.project': ProjectsProject;
      'github-contribution.github-contribution': GithubContributionGithubContribution;
      'experience.experience': ExperienceExperience;
      'education.education': EducationEducation;
    }
  }
}
