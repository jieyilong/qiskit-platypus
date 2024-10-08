import pickBy from 'lodash/pickBy'

import { OrmMapperBase } from '../../../libs/database/orm-mapper-base'
import { Syllabus as SyllabusDomain } from '../domain/syllabus'
import { SyllabusDocument, Syllabus as SyllabusOrm } from './syllabus-entity'

export class SyllabusMapper implements OrmMapperBase<SyllabusDocument, SyllabusDomain> {
  toOrmEntity (data: SyllabusDomain): SyllabusDocument {
    const fields = {
      id: data.id,
      name: data.name,
      instructor: data.instructor,
      location: data.location,
      institution: data.institution,
      officeHours: data.officeHours,
      classHours: data.classHours,
      email: data.email,
      courseList: data.courseList,
      code: data.code,
      ownerList: data.ownerList
    }
    const cleanedFields = pickBy(fields, field => field !== undefined)
    return new SyllabusOrm(cleanedFields)
  }

  toDomainEntity (document: SyllabusDocument): SyllabusDomain {
    return {
      id: document.id,
      name: document.name,
      instructor: document.instructor,
      location: document.location,
      institution: document.institution,
      officeHours: document.officeHours,
      classHours: document.classHours,
      email: document.email,
      courseList: document.courseList,
      code: document.code,
      ownerList: document.ownerList.map(id => id.toString())
    }
  }
}
