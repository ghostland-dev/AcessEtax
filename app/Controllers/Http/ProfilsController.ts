import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProfilsController {
  public async admin({}: HttpContextContract) {}

  public async prospect({}: HttpContextContract) {}

  public async client({}: HttpContextContract) {}

  public async commercial({}: HttpContextContract) {}

  public async unconnu({}: HttpContextContract) {}

  public async demo({}: HttpContextContract) {}

  public async test({}: HttpContextContract) {}
}
