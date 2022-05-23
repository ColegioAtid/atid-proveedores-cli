<template>
  <v-container v-if="datosProveedor">
    <v-sheet color="white pa-3" elevation="16" class="justify-center">
      <!-- Seccion datos generales del proveedor -->
      <v-card elevation="3" class="mx-auto" outlined>
        <v-list-item three-line>
          <v-list-item-content v-if="datosProveedor.datosGenerales">
            <div class="text-overline mb-4">{{datosProveedor.rfc}}</div>
            <v-list-item-title class="text-h5 mb-1">
              {{datosProveedor.datosGenerales.nombre_empresa}}
            </v-list-item-title>
            <v-list-item-subtitle>Fecha de registro: {{datosProveedor.created_at.slice(0,10) }}</v-list-item-subtitle>
            <v-list-item-subtitle>Tipo persona: {{datosProveedor.tipo_persona}}</v-list-item-subtitle>
            <v-list-item-subtitle>Correo: {{datosProveedor.correo}}</v-list-item-subtitle>
            <v-list-item-subtitle>Nombre de contacto: {{datosProveedor.datosGenerales.nombre_proveedor}} {{datosProveedor.datosGenerales.appa_proveedor}} {{datosProveedor.datosGenerales.apma_proveedor}}</v-list-item-subtitle>
            <v-list-item-subtitle>Número primario: {{datosProveedor.datosGenerales.numero_prim}} </v-list-item-subtitle>
            <v-list-item-subtitle>Número secundario: {{datosProveedor.datosGenerales.numero_sec}} </v-list-item-subtitle>
            <v-list-item-subtitle>Razón social: {{datosProveedor.datosGenerales.razon_social}} </v-list-item-subtitle>
            <v-list-item-subtitle>Domicilio fiscal: {{datosProveedor.datosGenerales.domicilio_fiscal}} </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-content v-else>
            <b>El proveedor aún no registra sus datos generales</b> <br> <br>
            <v-list-item-subtitle>Fecha de registro: {{datosProveedor.created_at.slice(0,10) }}</v-list-item-subtitle>
            <v-list-item-subtitle>Tipo persona: {{datosProveedor.tipo_persona}}</v-list-item-subtitle>
            <v-list-item-subtitle>Correo: {{datosProveedor.correo}}</v-list-item-subtitle>
          </v-list-item-content> 
          

          <v-list-item-avatar tile size="70" color="grey">
            <img alt="user" :src="require('@/assets/admin/provider.png')" />
          </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-row class="text-center">
            <v-col cols="12" md="4" lg="4" sm="12">
              <v-btn
                outlined
                rounded
                small
                color="purple"
                @click="modalCorreo = true"
              >
                Envíar correo
                <v-icon right> mdi-email </v-icon>
              </v-btn>
            </v-col>
            <template v-if="datosProveedor.datosGenerales">
              <v-col
              v-if="!estatusProveedor"
              cols="12"
              md="4"
              lg="4"
              sm="12"
            >
              <v-btn
                outlined
                rounded
                small
                color="teal"
                @click="dialogValidacion = true"
              >
                Validar información
              </v-btn>
            </v-col>
            <v-col v-else cols="12" md="4" lg="4" sm="12">
              <v-btn @click="dialogValidacion = true" outlined rounded small color="red">
                Invalidar información
              </v-btn>
            </v-col>
            <v-col v-if="estatusProveedor" cols="12" md="4" lg="4" sm="12">
              <v-chip small class="ma-2" color="teal" outlined>
                <v-icon left> mdi-account-check </v-icon>
                Estatus: Validado
              </v-chip>
            </v-col>
            <v-col v-else>
              <v-chip class="ma-2" color="red" outlined>
                <v-icon left> mdi-account-alert </v-icon>
                Estatus: No validado
              </v-chip>
            </v-col>
            </template>
          </v-row>
        </v-card-actions>
      </v-card>
      <!-- Sección de documentos -->
      <v-card v-if="datosProveedor.datosGenerales" elevation="3" class="mx-auto mt-7" outlined>
        <v-card-title> Documentos anexados </v-card-title>
        <v-card-subtitle>
          Documentos anexados por el proveedor
        </v-card-subtitle>
        <v-card-text v-if="getListaFilesProveedores()">
          <div class="mt-7" v-for="documento in getListaFilesProveedores().general" :key="documento">
            <h3 class="text-center display-5">{{getFileNameTag(documento)}}</h3>
            <div class="text-center ma-3">
              <v-btn
              small
              color="purple"
              outlined
              rounded
              @click="$router.push({name:'historial-documentos'})"
              v-if="getFileNameTag(documento) === 'Opinión de cumplimiento'"
            >
              Ver historial
            </v-btn>
            </div>
            <iframe
              width="100%"
              height="400"
              :src="`https://www.atid.edu.mx/proveedoresDocumentos/${documento}`"
              frameborder="0"
            />
          </div>
        </v-card-text>
        <v-card-text v-else>
          <p>Sin documentos registrados</p>
        </v-card-text>
      </v-card>
    </v-sheet>
    <!-- Modal invalidar información -->
    <v-row justify="center">
      <v-dialog v-model="dialogValidacion" persistent max-width="290">       
        <v-card>
          <v-card-title class="text-h5">
            Estatus del proveedor
          </v-card-title>
          <v-card-text
            >¿Estás segur@ que deseas actualizar el estatus de este proveedor?</v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="purple"
              text
              @click="dialogValidacion = false"
            >
              Cancelar
            </v-btn>
            <v-btn color="teal" text @click="validarInformacion()">
              Sí
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <!-- Modal de envio de correo -->
    <div class="text-center">
      <v-dialog persistent scrollable v-model="modalCorreo" width="500">
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Envíar correo al proveedor
          </v-card-title>

          <v-card-text>
            Esta acción envirá un correo electrónico al proveedor con un mensaje
            personalizado. En la sección de abajo escriba el asunto y el cuerpo
            del mensaje.
          </v-card-text>
          <v-card-text>
            <v-text-field
              v-model="customMailMessage.asunto"
              label="Asunto"
              placeholder="Asunto"
              outlined
            ></v-text-field>
            <v-textarea
              v-model="customMailMessage.bodyMessage"
              outlined
              name="input-7-4"
              label="Mensaje a mandar"
            ></v-textarea>
          </v-card-text>
          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="teal" text @click="enviarCorreo()">
              Envíar correo
            </v-btn>
            <v-btn color="purple" text @click="modalCorreo = false">
              Cancelar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
      dialogValidacion: false, 
      estatusProveedor:null,
      modalCorreo: false,
      datosProveedor:null,
      customMailMessage: {
        asunto: "",
        bodyMessage: "",
        correoProveedor:""
      },
      documetntos:[
        {nameOnServer:'COMPROBANTEDOMICILIO', fileTag:'Comprobante de domicilio'},
        {nameOnServer:'OPINIONCUMPLIMIENTO', fileTag:'Opinión de cumplimiento'},
        {nameOnServer:'CONSTANCIAFISCAL', fileTag:'Constancia de situación fiscal'},
        {nameOnServer:'CARATULACUENTA', fileTag:'Carátula de estado de cuenta'},
        {nameOnServer:'ACTUALIZACIONDOMICILIOSAT', fileTag:'Actualización de cambio de domicilio ante el SAT'},
        {nameOnServer:'ACTACONSTITUTIVA', fileTag:'Acta constitutiva'},
        {nameOnServer:'PODERNOTARIAL', fileTag:'Poder notarial'},
        {nameOnServer:'INE', fileTag:'INE del representante'},
      ]
    };
  },
  computed:{
    ...mapGetters('admin',['getListaFilesProveedores']),
    
  },
  methods: {
    /* Vuex */
    ...mapActions('admin',[
      'actualizaEstatusProveedorAction',
      'enviaCorreoIndividualAction',
      'getFilesProveedorListAction'
      ]),
    /* Local */
    validarInformacion: async function () {
      this.dialogValidacion = false
      const succes = await this.actualizaEstatusProveedorAction(this.datosProveedor.rfc)
      if(succes)
      this.estatusProveedor = !this.estatusProveedor      
    },
    enviarCorreo: async function(){
      this.modalCorreo = false
      this.customMailMessage.correoProveedor = this.datosProveedor.correo
      await this.enviaCorreoIndividualAction(this.customMailMessage)
    },

    getFileNameTag: function(filename){
      
      const nombreArchivo = this.documetntos.find((f) => filename.includes(f.nameOnServer))
      return nombreArchivo.fileTag;
      //return filename;
    },

    init:async function(){
      this.datosProveedor = this.$route.params.dataProveedor
      if(!this.datosProveedor){
        this.$router.go(-1)
      }else{
        await this.getFilesProveedorListAction(this.datosProveedor.rfc);
        this.estatusProveedor = this.datosProveedor.estatus           
      }
      
    }
  },
  created() {
    this.init()    
  },
};
</script>